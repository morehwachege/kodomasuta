<h1 align="center">kodomasuta 🥷</h1>
<p align="center">
<em>Get your ultimate candidate</em>
</p>

<p align="center"> 
<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB">

<img src="https://img.shields.io/badge/Ruby_on_Rails-CC0000?style=for-the-badge&logo=ruby-on-rails&logoColor=white">


<img src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white">

<img src="https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white">
 </p>

**Kodomasuta** is a Japanese name for Code Master. It's a code assessment application with tests for various programming languages with an admin page where you can invite candidates for coding challenges. Candidates can also take tests to improve their own skills.

### Tech stack


- Ruby, Ruby on Rails,  npm
  


### Setup
##### Client
Install dependencies for the client that uses React JavaScript.
```bash
npm install --prefix client
```

##### Server
Install dependencies for the client that uses Ruby and Rails. Bundle dependencies on terminal.

```bash
bundle install 
```
---

##### Run the application
```bash
foreman start -f Procfile.dev
```

## API Endpoints
#### "/students"
- Methods - *index, show, create, update, delete*

#### "/technical-mentors"
- Methods - *index, show, create, update, delete*

#### "/assessments"
- Methods - *index, show, create, delete*

#### "/questions"
- Methods - *index, show, create, update, delete*

#### "/feedbacks"
- Methods - *index, show, create, update, delete*


Deletion or updates in models such as assessments and questions requires authorization as technical mentor 

### Contributions
Create a feature or bugfix branch for your changes. For example ```ft-user-card``` for a feature or ```bug-model-validations``` for a bugfix branch. Commit small changes and often. Note that the reviewers may request commit squashes when necessary.
After commits pushed are ready create a pull request for the feature and notify the reviewer if applicable to merge to the development branch

### License
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files in accordance with the **MIT license**

### Authors
- [x] **[Antony Muriithi Gakuru](https://twitter.com/muriithi_gakuru)**

- [x] **[Anne Ogongo](https://github.com/anne-alt)**

- [x] **[Jason Kiptoo](https://github.com/jasonkiptoo)**

- [x] **[Felix Barosio](https://github.com/Felix-Barosio)**