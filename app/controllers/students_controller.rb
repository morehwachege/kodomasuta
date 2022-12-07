class StudentsController < ApplicationController
    
    
    def index
        student = Student.all
        render json: student, status: :ok
    end
end
