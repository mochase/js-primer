var base64url = require('base64url')
// var header = {
//     'userId': '1234',
//     'sex': 'male'
// }
// console.log(base64url(JSON.stringify(header)))
// console.log(JSON.stringify(header))
console.log(base64url.encode('ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDjK+Obqo+X2CLaclqtLqQ9mNMp1RUhwj1g1LldmX03+JlgBWjTRgEd6zuK49o+4cMQpCRwEVWI9MKyhkIlg8r1vhsalzQU9YEihDeVzZSshqNjyIYi5oEb+QzDkNRaoQjWAjWgLD18jgPkJ8FVAAE7jYUt1JyiOpkqbGH9/5JJDHTtGuDCC+Xes7iCKi+LC4aqRnKACWVzRyWsswQ34rEwO9gorI0Mt/SNwx/Wb9ow0eQC4XO8ohgsKnYVz/USkVz3r2XtEvd7MrJdFHtPIIXiTv4lhTyBQAxzWjlb7MzA501cQNOUUF77kr05TzL0wNTg7Omz226yq5H9PmFdqTu3'))