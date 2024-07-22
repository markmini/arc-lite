document.getElementById('contact-btn1').addEventListener('click', function() {
    window.location.href = 'contacts.html';
  });
  document.getElementById('learn-btn').addEventListener('click', function() {
    window.location.href = 'services.html';
  });  
  
document.getElementById('toggle-btn').addEventListener('click', function() {
    var sidebar = document.getElementById('sidebar');
    var content = document.getElementById('content');
    sidebar.classList.toggle('hidden');
    content.classList.toggle('full-width');
  });
  