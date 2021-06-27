import LogoImg from '../../assets/images/logo.svg'
import deleteImg from '../../assets/images/delete.svg'
import checkImg from '../../assets/images/check.svg'
import answerImg from '../../assets/images/answer.svg'

import * as S from './styles'
import { Button } from '../../components/Button/index'
import { RoomCode } from 'components/RoomCode'
import { useHistory, useParams } from 'react-router-dom'
import { Question } from '../../components/Question/index'
import { useRoom } from '../../hooks/useRoom'
import { database } from 'services/firebase'

type RoomType = {
  id: string
}

export function AdminRoom() {
  const params = useParams<RoomType>()
  const history = useHistory()

  const { questions, title } = useRoom(params.id)

  async function handleEndRoom() {
    await database.ref(`rooms/${params.id}`).update({
      endedAt: new Date()
    })

    history.push('/')
  }

  async function handleHiglighQuestion(questionId: string) {
    await database.ref(`rooms/${params.id}/questions/${questionId}`).update({
      isHighlighted: true
    })
  }

  async function handleCheckQuestionAnswer(questionId: string) {
    await database.ref(`rooms/${params.id}/questions/${questionId}`).update({
      isAnswered: true
    })
  }

  async function handleDeleteQuestion(questionId: string) {
    if (window.confirm('Tem certeza que deseja remover essa pergunta')) {
      await database.ref(`rooms/${params.id}/questions/${questionId}`).remove()
    }
  }

  return (
    <S.Container>
      <header>
        <S.Content>
          <img src={LogoImg} alt="Letmeask" />
          <div>
            <RoomCode code={params.id} />
            <Button isOutlined onClick={handleEndRoom}>
              Encerrar Sala
            </Button>
          </div>
        </S.Content>
      </header>

      <S.Main>
        <S.Content>
          <S.ContentTitle>
            <h1>Sala {title}</h1>
            {questions.length > 0 && (
              <span>{questions.length} pergunta(s)</span>
            )}
          </S.ContentTitle>
        </S.Content>

        <S.QuestionList>
          {questions.length > 0 ? (
            questions.map((question) => (
              <Question
                key={question.id}
                author={question.author}
                content={question.content}
                isAnswered={question.isAnswered}
                isHighlighted={question.isHighlighted}
              >
                {!question.isAnswered && (
                  <>
                    <button
                      type="button"
                      onClick={() => {
                        handleCheckQuestionAnswer(question.id)
                      }}
                    >
                      <img src={checkImg} alt="" />
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        handleHiglighQuestion(question.id)
                      }}
                    >
                      <img src={answerImg} alt="" />
                    </button>
                  </>
                )}

                <button
                  type="button"
                  onClick={() => {
                    handleDeleteQuestion(question.id)
                  }}
                >
                  <img src={deleteImg} alt="" />
                </button>
              </Question>
            ))
          ) : (
            <div>Nenhuma pergunta nessa sala</div>
          )}
        </S.QuestionList>
      </S.Main>
    </S.Container>
  )
}
