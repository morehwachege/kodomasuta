class StudentAssessmentsController < ApplicationController
  # skip_before_action :authorized, only: :index
  def index
    student_assessments = StudentAssessment.all
    render json: student_assessments, status: :ok
  end
end
