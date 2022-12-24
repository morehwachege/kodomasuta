class StudentAssessmentsController < ApplicationController

  def index
    student_assessments = StudentAssessment.all
    render json: student_assessments, status: :ok
  end
end
