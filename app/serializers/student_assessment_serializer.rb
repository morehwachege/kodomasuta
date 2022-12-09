class StudentAssessmentSerializer < ActiveModel::Serializer
  attributes :id, :student_id, :grade_status, :assessment
end
