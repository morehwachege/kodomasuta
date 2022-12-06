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
    technical_mentor = TechnicalMentor.create(
        firstname: fname,
        lastname: lname
        email: "#{fname.downcase}.#{lname.downcase}@gmail.com"
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
end

puts "✅ Done seeding 🌱"
