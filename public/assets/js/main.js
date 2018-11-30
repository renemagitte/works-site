function Main(){

  var _navListWorksElement;
  var _navListWorksItems;
  var _navListSetdesignsElement;
  var _navListSetdesignsItems;
  var _navLinksWorks;
  var _navLinksSetdesign;
  var _mobilemenuButton;
  var _nav;
  // var _navList;
  var _navArrow;
  var _contactButton;
  var _contactContainer;

  var _navListWorksAllLink;
  var _navListSetdesignAllLink;

  var _worksGalleryItems;
  var _setdesignGalleryItems;

  var _contentContainer;


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
    // _navList = document.querySelector('.nav-list');
    _navArrow = document.querySelector('.nav-arrow');
    _contactButton = document.querySelector('.nav-listItem-contact');
    _contactContainer = document.querySelector('.contact');

    _worksGalleryItems = [];
    _gallery = document.querySelector('.gallery');

    _contentContainer = document.querySelector('.content');
   

  

    createWorksList();
    createSetdesignsList();

    _mobilemenuButton.addEventListener('click', toggleMobilemenu);
    _contactButton.addEventListener('click', showContactPage);

    window.addEventListener('scroll', desktopScrollNav);
    window.addEventListener('resize', resizeNav);

    
  }

  function resizeNav(){
    if(window.innerWidth < 769){
      /* Issue with menu styling on resize... "solving" it by reloading page/css.. */
      window.location.reload(false);
      // _nav.style.position='absolute';
      // _nav.style.top=60 + 'px';
    }
    if(window.innerWidth > 769){
      window.location.reload(false);
      // _nav.style.position='absolute';
      // _nav.style.top=50 + 'vh';
    }
  }

  function desktopScrollNav(){
    if(window.innerWidth > 1024){
      if(window.scrollY > 284){
        _nav.style.position='fixed';
        _nav.style.top=60 + 'px';
      }
      if(window.scrollY < 284){
        _nav.style.position='absolute';
        _nav.style.top=50 + 'vh';
      }
    }
  }


  function toggleMobilemenu(){
    _nav.classList.toggle('nav--show');
    _nav.classList.contains('nav--show') ? _navArrow.src='assets/images/arrowup.png' : _navArrow.src='assets/images/arrowdown.png';
  }

  function showContactPage(){

    toggleMobilemenu();

    _contentContainer.innerHTML = '';

    var _contact = document.createElement('div');
    _contact.classList.add('contact');
    _contentContainer.appendChild(_contact);

    var _contactOutput;
    _contactOutput = '<h1>Contact</h1><p>Installation, set design, curation - Paris & Stockholm</p><p>*telefonnummer*</p><p><a href="*m@ailadress*”_blank">*mail@dress.com*</a></p>';
    _contact.insertAdjacentHTML('beforeend', _contactOutput);

  }

  function showAllWorks(){
    /* Clear content container */
    _contentContainer.innerHTML = '';

    /* Create gallery container */
    var _gallery = document.createElement('div');
    _gallery.classList.add('gallery');
    _contentContainer.appendChild(_gallery);

    _worksGalleryItems = [];
    var _work;
    for(var i = 0; i < _worksArray.length; i++){
      _work = '<div class="gallery-item"><img src="assets/images/' + _worksArray[i].thumb + '" class="gallery-item-image">' + _worksArray[i].title + '</div>';
      _worksGalleryItems.push(_work);
    }
    _gallery.insertAdjacentHTML('beforeend', _worksGalleryItems.join(''));

  }

  function showAllSetdesigns(){

    _contentContainer.innerHTML = '';

    var _gallery = document.createElement('div');
    _gallery.classList.add('gallery');
    _contentContainer.appendChild(_gallery);

    _setdesignGalleryItems = [];
    var _setdesign;
    for(var i = 0; i < _setdesignArray.length; i++){
      _setdesign = '<div class="gallery-item"><img src="assets/images/' + _setdesignArray[i].thumb + '" class="gallery-item-image">' + _setdesignArray[i].title + '</div>';
      _setdesignGalleryItems.push(_setdesign);
    }
    _gallery.insertAdjacentHTML('beforeend', _setdesignGalleryItems.join(''));

  }


  function createWorksList(){
    var _worksLi;
    for(var i = 0; i < 5; i++){
      _worksLi = '<li class="nav-listItem nav-listItem-works" data-id=' + _worksArray[i].id + '>' + _worksArray[i].title + '</li>';
      _navListWorksItems.push(_worksLi);
    }
    _navListWorksItems.push('<li class="nav-listItem nav-listItem-works nav-listItem-works-all">View all... <img src="assets/images/arrowright.png" class="nav-arrow"></li>');
    _navListWorksElement.insertAdjacentHTML('beforeend', _navListWorksItems.join(''));

  }

  function createSetdesignsList(){
    var _setdesignsLi;
    for(var i = 0; i < 5; i++){
      _setdesignsLi = '<li class="nav-listItem nav-listItem-setdesign" data-id=' + _setdesignArray[i].id + '>' + _setdesignArray[i].title + '</li>';
      _navListSetdesignsItems.push(_setdesignsLi);
    }
    _navListSetdesignsItems.push('<li class="nav-listItem nav-listItem-setdesign nav-listItem-setdesign-all">View all... <img src="assets/images/arrowright.png" class="nav-arrow"></li>');
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

    _navListWorksAllLink = document.querySelector('.nav-listItem-works-all');
    _navListWorksAllLink.addEventListener('click', showAllWorks);

    _navListSetdesignAllLink = document.querySelector('.nav-listItem-setdesign-all');
    _navListSetdesignAllLink.addEventListener('click', showAllSetdesigns);
  }

  // This function builds and displays a  work case block
  function displayCase(){
    toggleMobilemenu();

    _contentContainer.innerHTML = '';

    var _case = document.createElement('div');
    _case.classList.add('case');
    _contentContainer.appendChild(_case);

    _caseOutput = '';

    for(var i = 0; i < _worksArray.length; i++){
      if(_worksArray[i].id == this.dataset.id){

        if(_worksArray[i].title && _worksArray[i].year){
          _caseOutput += '<p>' + _worksArray[i].title + ' (' + _worksArray[i].year + ')</p>'
        }

        if(_worksArray[i].images){
          for(var j = 0; j < _worksArray[i].images.length; j++){
            _caseOutput += '<img src="assets/images/' + _worksArray[i].images[j] + '" class="case-image">';
          }
        }
        if(_worksArray[i].exhibition){
          _caseOutput += '<p>' + _worksArray[i].exhibition + '</p>'
        }
        if(_worksArray[i].material){
          _caseOutput += '<p>' + _worksArray[i].material + '</p>'
        }
      }
    }
    _case.insertAdjacentHTML('beforeend', _caseOutput);
  }

  // This function builds and displays a setdesign case block
  function displayCaseSetdesign(){
    toggleMobilemenu();

    _contentContainer.innerHTML = '';

    var _case = document.createElement('div');
    _case.classList.add('case');
    _contentContainer.appendChild(_case);

    _caseOutput = '';

    for(var i = 0; i < _setdesignArray.length; i++){
      if(_setdesignArray[i].id == this.dataset.id){
        
        if(_setdesignArray[i].title){
          _caseOutput += '<p>' + _setdesignArray[i].title + '</p>'
        }

        if(_setdesignArray[i].images){
          for(var j = 0; j < _setdesignArray[i].images.length; j++){
            _caseOutput += '<img src="assets/images/' + _setdesignArray[i].images[j] + '" class="case-image">';
          }
        }
        if(_setdesignArray[i].video){
          _caseOutput += '<iframe width="800" height="533" src="' + _setdesignArray[i].video + '" frameborder="0" allowfullscreen></iframe>'
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
    _case.insertAdjacentHTML('beforeend', _caseOutput);
  }



  init();
};

window.onload = Main();