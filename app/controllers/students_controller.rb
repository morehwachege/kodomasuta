class StudentsController < ApplicationController
    skip_before_action :authorized, only: [:create, :index, :update, :show, :get_student]
rescue_from ActiveRecord::RecordInvalid, with: :rescue_from_record_invalid
    def index
        students = Student.all
        render json: students
    end

    def show
      student = Student.find_by(id: params[:id])
      render json: student, status: :ok
    end

    def get_student
      student = Student.find_by(email: params[:email])
      render json: student, status: :ok
    end

    def create
      student = Student.create!(student_params)
      render json: student, status: :created
    end

    def update
      student = Student.find_by(id: params[:id])
      if student
        student.update!(student_params)
        render json: student
      else
        render json: { error: "Student not found" }, status: :not_found
      end
    end

    def destroy
      student = Student.find_by(id: params[:id])
      if student
        student.destroy
        head :no_content
      else
        render json: { error: "Student not found" }, status: :not_found
      end
    end

    private

    def student_params
      params.permit(:firstname, :lastname, :email)
    end

    def rescue_from_record_invalid invalid
      render json: { error: invalid.message }, status: :bad_request
    end
end
