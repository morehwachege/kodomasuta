class TechnicalMentorsController < ApplicationController

    def index
        technical_mentors = TechnicalMentor.all
        render json: technical_mentors
    end

    def show
        technical_mentor = TechnicalMentor.find_by(id: params[:id])
        if technical_mentor
          render json: technical_mentor
        else
          render json: { error: "Technical Mentor not found" }, status: :not_found
        end
    end

    def update
        technical_mentor = TechnicalMentor.find_by(id: params[:id])
        if technical_mentor
          technical_mentor.update(technical_mentor_params)
          render json: technical_mentor
        else
          render json: { error: "Technical Mentor not found" }, status: :not_found
        end
      end

    def create
      technical_mentor = TechnicalMentor.create(technical_mentor_params)
      render json: technical_mentor, status: :created
    end

    def destroy
        technical_mentor = TechnicalMentor.find_by(id: params[:id])
        if technical_mentor
          technical_mentor.destroy
          head :no_content
        else
          render json: { error: "Technical-Mentor not found" }, status: :not_found
        end
      end

      private

      def technical_mentor_params
        params.permit(:firstname, :lastname, :email)
      end

end
