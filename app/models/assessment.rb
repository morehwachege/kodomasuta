class Assessment < ApplicationRecord
    has_many :student_assessments
    has_many :students, through: :student_assessments
    has_one :technical_mentor
    has_many :questions
end
