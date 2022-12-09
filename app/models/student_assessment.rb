class StudentAssessment < ApplicationRecord
    belongs_to :student
    belongs_to :assessment

    def grade_status
        if grade
            grade
        else
            "assessment not taken yet"
        end
    end
end
