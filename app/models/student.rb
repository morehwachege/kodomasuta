class Student < ApplicationRecord
    has_many :student_assessments
    has_many :assessments, through: :student_assessments
end
