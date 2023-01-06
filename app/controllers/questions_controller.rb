class QuestionsController < ApplicationController

  def index
    questions = Question.all
    render json: questions, status: :ok
    end

    def show
        question = Question.find_by(id: params[:id])
        if question
          render json: question
        else
          render json: { error: "Question not found" }, status: :not_found
        end
    end

    def create
        question = Question.create!(question_params)
        render json: question, status: :created
    end

      private

  def question_params
    params.permit(:question, :choice1, :choice2, :choice3, :correct_answer, :assessment_id)
  end
end
