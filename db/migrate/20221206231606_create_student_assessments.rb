class CreateStudentAssessments < ActiveRecord::Migration[6.1]
  def change
    create_table :student_assessments do |t|
      t.string :assessment_id
      t.string :student_id
      t.integer :grade

      t.timestamps
    end
  end
end
