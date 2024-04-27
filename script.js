document.getElementById('rsvp-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var guests = document.getElementById('guests').value;
    alert('Thank you, ' + name + ', for RSVPing! We look forward to seeing you and your ' + guests + ' guests at our event.');
  });