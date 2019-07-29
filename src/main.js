var accordion = function(){
  var accordionPanel = document.getElementsByClassName('accordion-title');

  for(var i = 0; i < accordionPanel.length; i++){
    accordionPanel[i].addEventListener('click', function(){
      this.classList.toggle('open');

      var content = this.nextElementSibling;
      if (this.classList.contains('open')) {
        content.classList.remove('hide')

        var clickedPanel = this;
        var OpenedPanel = document.getElementsByClassName('accordion-title open');
        for (var j = 0; j < OpenedPanel.length; j++) {
          if (OpenedPanel[j] !== clickedPanel){
            OpenedPanel[j].click();
          }
        }
      } else {
          content.classList.add('hide');
        }
    });
  };

};

accordion();

