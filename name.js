function Contact(first, last) {
  this.firstName = first;
  this.lastName = last;
  this.fullName;
}

Contact.prototype.fullName = function() {
  this.fullName = this.firstName + " " + this.lastName;
  return this.firstName + " " + this.lastName;
}

var me = new Contact();
