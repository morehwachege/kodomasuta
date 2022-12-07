class FeedbacksController < ApplicationController

    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

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

    # POST /feedbacks
    def create 
        @feedback = Feedback.create!(feedback_params)
        render json: @feedback, status: :created
    end

    # PATCH /feedbacks/:id
    def update
      @feedback = find_feedback
      @feedback.update!(feedback_params)
      render json: @feedback, status: :ok
    end

    # DELETE /feedbacks/:id
    def destroy
      @feedback = find_feedback
      @feedback.destroy
      render json: { message: "Feedback Deleted"}, status: :ok
    end


    private

    def find_feedback
        Feedback.find(params[:id])
    end

    def feedback_params
        params.permit(:title, :content, :question_id)
    end
    
    # feedback not found response
    def render_not_found_response
        render json: { errors: "Feedback not found"}, status: :not_found
    end
    
    # render messages for invalid responses
    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

end
