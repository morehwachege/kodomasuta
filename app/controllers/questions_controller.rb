class QuestionsController < ApplicationController

    def index
        question = Question.all
        render json: question, status: :ok
    end
end
