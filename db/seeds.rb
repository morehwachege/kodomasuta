# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts "Start✍🏻 seeding...📝"
puts "======================================================="

(1..15).collect do |i|
    fname = Faker::Name.first_name
    lname = Faker::Name.last_name
    student = Student.create(
        firstname: fname,
        lastname: lname,
        email: "#{fname.downcase}.#{lname.downcase}@student.kodomasuta.com"
    )
    tmFName = Faker::Name.first_name
    tmLName = Faker::Name.last_name
    technical_mentor = TechnicalMentor.create(
        firstname: tmFName,
        lastname: tmLName,
        email: "#{fname.downcase}.#{lname.downcase}@kodomasuta.com"
    )
    category = Category.create(
        name: Faker::ProgrammingLanguage.name 
    )

    assessment = Assessment.create(
        title: Faker::Quote.jack_handey,
        category_id: rand(1..15),
        description: (1..2).map {|i| Faker::Quote.matz }.join(" "),
        technical_mentor_id: rand(1..15)
    )
    question = Question.create(
        question: Faker::Quote.most_interesting_man_in_the_world,
        choice1: Faker::Name.name,
        choice2: Faker::Name.name,
        choice3: Faker::Name.name,
        correct_answer: Faker::Name.name,
        assessment_id: rand(1..15)
    )

    student_assessment = StudentAssessment.create(
        assessment_id: rand(1..15),
        student_id: rand(1..15),
        grade: nil
    )
    feedback = Feedback.create(
        title: Faker::Quote.jack_handey,
        content: (1..2).map {|i| Faker::Quote.jack_handey }.join(" "),
        question_id: rand(1..15)
    )
end

puts "✅ Done seeding 🌱"
