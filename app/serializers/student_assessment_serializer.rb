class StudentAssessmentSerializer < ActiveModel::Serializer
  attributes :id, :student_name, :grade_status, :student_assessment
end
