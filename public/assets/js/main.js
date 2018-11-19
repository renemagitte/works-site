function Main(){

  var _navListWorksElement;
  var _navListWorksItems;
  var _navListSetdesignsElement;
  var _navListSetdesignsItems;
  var _navLinks;

  var _caseContainer;
  var _caseOutput;

  
  
	function init() {

    _navListWorksElement = document.querySelector('.nav-list-works');
    _navListSetdesignsElement = document.querySelector('.nav-list-setdesigns');
    _caseContainer = document.querySelector('.case');

    _navListWorksItems = [];
    _navListSetdesignsItems = [];

    createWorksList();
    createSetdesignsList();


    
  }



  function createWorksList(){
    var _worksLi;
    for(var i = 0; i < _worksArray.length; i++){
      _worksLi = '<li class="nav-listItem" data-id=' + _worksArray[i].id + '>' + _worksArray[i].title + '</li>';
      _navListWorksItems.push(_worksLi);
    }
    _navListWorksElement.insertAdjacentHTML('beforeend', _navListWorksItems.join(''));
  }

  function createSetdesignsList(){
    var _setdesignsLi;
    for(var i = 0; i < _setdesignArray.length; i++){
      _setdesignsLi = '<li class="nav-listItem" data-id=' + _setdesignArray[i].id + '>' + _setdesignArray[i].title + '</li>';
      _navListSetdesignsItems.push(_setdesignsLi);
    }
    _navListSetdesignsElement.insertAdjacentHTML('beforeend', _navListSetdesignsItems.join(''));

    navLinks();
  }

  function navLinks(){

    _navLinks = document.querySelectorAll('.nav-listItem');
    
    for(var i = 0; i < _navLinks.length; i++){
      _navLinks[i].addEventListener('click', displayCase);
    }
  }

  function displayCase(){
    _caseOutput = '';
    _caseContainer.innerHTML = '';


    for(var i = 0; i < _worksArray.length; i++){
      if(_worksArray[i].id == this.dataset.id){

        if(_worksArray[i].images){
          for(var j = 0; j < _worksArray[i].images.length; j++){
            _caseOutput += '<img src="assets/images/' + _worksArray[i].images[j] + '" class="case-image">';
          }
          console.log(_caseOutput);
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



  init();
};

window.onload = Main();