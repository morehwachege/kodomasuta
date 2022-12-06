class FeedbacksController < ApplicationController

    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    # GET /feedbacks
    def index
      @feedback = Feedback.all
      render json: @feedback
    end

    # GET /feedbacks/:id
    def show
      @feedback = find_feedback
      render json: @feedback, status: :ok
    end

    private

    def find_feedback
        Feedback.find(params[:id])
    end
    
    # feedback not found response
    def render_not_found_response
        render json: { errors: "Feedback not found"}, status: :not_found
    end

end
