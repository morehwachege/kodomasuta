class QuestionsController < ApplicationController
    skip_before_action :authorized, only: :index 
    def index
        question = Question.all
        render json: question, status: :ok
    end
end
