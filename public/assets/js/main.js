function Main(){

  var _navListWorksElement;
  var _navListWorksItems;
  var _navListSetdesignsElement;
  var _navListSetdesignsItems;
  var _navLinksWorks;
  var _navLinksSetdesign;
  var _mobilemenuButton;
  var _nav;
  var _navList;
  var _navArrow;

  var _caseContainer;
  var _caseOutput;

  
  
	function init() {

    _navListWorksItems = [];
    _navListSetdesignsItems = [];
    _navListWorksElement = document.querySelector('.nav-list-works');
    _navListSetdesignsElement = document.querySelector('.nav-list-setdesigns');
    _caseContainer = document.querySelector('.case');
    _mobilemenuButton = document.querySelector('.mobilemenu-button');
    _nav = document.querySelector('.nav');
    _navList = document.querySelector('.nav-list');
    _navArrow = document.querySelector('.nav-arrow');

    


    createWorksList();
    createSetdesignsList();

    _mobilemenuButton.addEventListener('click', toggleMobilemenu);
    

    
  }

  function toggleMobilemenu(){
    _nav.classList.toggle('nav--show');
    _nav.classList.contains('nav--show') ? _navArrow.src='assets/images/arrowup.png' : _navArrow.src='assets/images/arrowdown.png';
  }


  function createWorksList(){
    var _worksLi;
    for(var i = 0; i < _worksArray.length; i++){
      _worksLi = '<li class="nav-listItem nav-listItem-works" data-id=' + _worksArray[i].id + '>' + _worksArray[i].title + '</li>';
      _navListWorksItems.push(_worksLi);
    }
    _navListWorksElement.insertAdjacentHTML('beforeend', _navListWorksItems.join(''));

  }

  function createSetdesignsList(){
    var _setdesignsLi;
    for(var i = 0; i < _setdesignArray.length; i++){
      _setdesignsLi = '<li class="nav-listItem nav-listItem-setdesign" data-id=' + _setdesignArray[i].id + '>' + _setdesignArray[i].title + '</li>';
      _navListSetdesignsItems.push(_setdesignsLi);
    }
    _navListSetdesignsElement.insertAdjacentHTML('beforeend', _navListSetdesignsItems.join(''));

    navLinks();
  }


  

  function navLinks(){
    _navLinksWorks = document.querySelectorAll('.nav-listItem-works');
    for(var i = 0; i < _navLinksWorks.length; i++){
      _navLinksWorks[i].addEventListener('click', displayCase);
    }

    _navLinksSetdesign = document.querySelectorAll('.nav-listItem-setdesign');
    for(var i = 0; i < _navLinksSetdesign.length; i++){
      _navLinksSetdesign[i].addEventListener('click', displayCaseSetdesign);
    }
  }

  // This function builds and displays a  work case block
  function displayCase(){
    toggleMobilemenu();
    _caseOutput = '';
    _caseContainer.innerHTML = '';

    for(var i = 0; i < _worksArray.length; i++){
      if(_worksArray[i].id == this.dataset.id){

        if(_worksArray[i].images){
          for(var j = 0; j < _worksArray[i].images.length; j++){
            _caseOutput += '<img src="assets/images/' + _worksArray[i].images[j] + '" class="case-image">';
          }
        }
        if(_worksArray[i].title && _worksArray[i].year){
          _caseOutput += '<p>' + _worksArray[i].title + ' (' + _worksArray[i].year + ')</p>'
        }
        if(_worksArray[i].exhibition){
          _caseOutput += '<p>' + _worksArray[i].exhibition + '</p>'
        }
        if(_worksArray[i].material){
          _caseOutput += '<p>' + _worksArray[i].material + '</p>'
        }
      }
    }
    _caseContainer.insertAdjacentHTML('beforeend', _caseOutput);
  }

  // This function builds and displays a setdesign case block
  function displayCaseSetdesign(){
    toggleMobilemenu();
    _caseOutput = '';
    _caseContainer.innerHTML = '';

    for(var i = 0; i < _setdesignArray.length; i++){
      if(_setdesignArray[i].id == this.dataset.id){

        if(_setdesignArray[i].images){
          for(var j = 0; j < _setdesignArray[i].images.length; j++){
            _caseOutput += '<img src="assets/images/' + _setdesignArray[i].images[j] + '" class="case-image">';
          }
        }
        if(_setdesignArray[i].video){
          _caseOutput += '<iframe width="800" height="533" src="' + _setdesignArray[i].video + '" frameborder="0" allowfullscreen></iframe>'
        }
        if(_setdesignArray[i].title){
          _caseOutput += '<p>' + _setdesignArray[i].title + '</p>'
        }
        if(_setdesignArray[i].desc){
          for(var j = 0; j < _setdesignArray[i].desc.length; j++){
            _caseOutput += '<p><span class="case-key">' + _setdesignArray[i].desc[j][0] + '</span> ' + _setdesignArray[i].desc[j][1] + '</p>'
          }
        }
        if(_setdesignArray[i].text){
          _caseOutput += '<p>' + _setdesignArray[i].text + '</p>'
        }

      }
    }
    _caseContainer.insertAdjacentHTML('beforeend', _caseOutput);
  }



  init();
};

window.onload = Main();