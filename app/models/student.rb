class Student < ApplicationRecord
    has_many :student_assessments
    has_many :assessments, through: :student_assessments

    def assessments_and_details
        self.assessments.map do |assessment|
            {
                "id": assessment.id,
                "title": assessment.title,
                "category": assessment.category.name,
                "description": assessment.description,
                # "technical_mentor": assessment.technical_mentor_id.name
            }
        end
    end
end
