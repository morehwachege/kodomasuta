class FeedbacksController < ApplicationController
    
    
    def index
        feedback = Feedback.all
        render json: feedback, status: :ok
    end
end
