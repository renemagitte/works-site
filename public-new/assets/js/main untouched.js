function Main(){

  var _navListWorksElement;
  var _navListWorksItems;
  var _navListSetdesignsElement;
  var _navListSetdesignsItems;
  var _navListEditorialsElement;
  var _navListEditorialsItems;
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

  var _galleryLinksWorks;
  var _galleryLinksSetdesigns;

	function init() {

    _navListEditorialsItems = [];
    _navListWorksItems = [];
    _navListSetdesignsItems = [];
    _navListEditorialsElement = document.querySelector('.nav-list-editorials');
    _navListWorksElement = document.querySelector('.nav-list-works');
    _navListSetdesignsElement = document.querySelector('.nav-list-setdesigns');
    _caseContainer = document.querySelector('.case');
    _mobilemenuButton = document.querySelector('.mobilemenu-button');
    _nav = document.querySelector('.nav');
    _navArrow = document.querySelector('.nav-arrow');
    _contactButton = document.querySelector('.nav-listItem-contact');
    _contactContainer = document.querySelector('.contact');

    _worksGalleryItems = [];
    _gallery = document.querySelector('.gallery');

    _contentContainer = document.querySelector('.content');
   

  
    createEditorialsList();
    createWorksList();
    createSetdesignsList();

    _mobilemenuButton.addEventListener('click', toggleMobilemenu);
    _contactButton.addEventListener('click', showContactPage);

    window.addEventListener('scroll', desktopScrollNav);
    // window.addEventListener('resize', resizeNav);

    
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
    if(window.innerWidth > 769){
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
    _contactOutput = '<span class="contact-heading">Contact</span><p>Installation, set design, curation - Paris & Stockholm</p><p>*telefonnummer*</p><p><a href="*m@ailadress*”_blank">*mail@dress.com*</a></p>';
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
      _work = '<div class="gallery-item gallery-item-works" data-id="' + _worksArray[i].id + '"><img src="assets/images/' + _worksArray[i].thumb + '" class="gallery-item-image">' + _worksArray[i].title + '</div>';
      _worksGalleryItems.push(_work);
    }
    _gallery.insertAdjacentHTML('beforeend', _worksGalleryItems.join(''));

    galleryLinks();

  }

  function showAllSetdesigns(){

    _contentContainer.innerHTML = '';

    var _gallery = document.createElement('div');
    _gallery.classList.add('gallery');
    _contentContainer.appendChild(_gallery);

    _setdesignGalleryItems = [];
    var _setdesign;
    for(var i = 0; i < _setdesignArray.length; i++){
      _setdesign = '<div class="gallery-item gallery-item-setdesign" data-id="' + _setdesignArray[i].id + '"><img src="assets/images/' + _setdesignArray[i].thumb + '" class="gallery-item-image">' + _setdesignArray[i].title + '</div>';
      _setdesignGalleryItems.push(_setdesign);
    }
    _gallery.insertAdjacentHTML('beforeend', _setdesignGalleryItems.join(''));

    galleryLinks();

  }

  // function showSetdesignCase(setDesignID){
  //   toggleMobilemenu();

  //   _contentContainer.innerHTML = '';

  //   var _case = document.createElement('div');
  //   _case.classList.add('case');
  //   _contentContainer.appendChild(_case);

  //   _caseOutput = '';

  //   for(var i = 0; i < _setdesignArray.length; i++){
  //     if(_setdesignArray[i].id == setDesignID){
        
  //       if(_setdesignArray[i].title){
  //         _caseOutput += '<p><span class="case-value">' + _setdesignArray[i].title + '</span></p>'
  //       }

  //       if(_setdesignArray[i].images){
  //         for(var j = 0; j < _setdesignArray[i].images.length; j++){
  //           _caseOutput += '<img src="assets/images/' + _setdesignArray[i].images[j] + '" class="case-image">';
  //         }
  //       }
  //       if(_setdesignArray[i].video){
  //         _caseOutput += '<iframe width="800" height="533" src="' + _setdesignArray[i].video + '" frameborder="0" allowfullscreen></iframe>'
  //       }
  //       if(_setdesignArray[i].desc){
  //         for(var j = 0; j < _setdesignArray[i].desc.length; j++){
  //           // _caseOutput += '<p><span class="case-key">' + _setdesignArray[i].desc[j][0] + '</span> ' + _setdesignArray[i].desc[j][1] + '</p>'
  //           _caseOutput += '<p><span class="case-key">' + _setdesignArray[i].desc[j][0] + '</span> <span class="case-value">' + _setdesignArray[i].desc[j][1] + '</span></p>'
  //         }
  //       }
  //       if(_setdesignArray[i].text){
  //         _caseOutput += '<p><span class="case-value">' + _setdesignArray[i].text + '</span></p>'
  //       }

  //     }
  //   }
  //   _case.insertAdjacentHTML('beforeend', _caseOutput);

  // }


  /******* Creating nav list *******/

  function createEditorialsList(){
    var _editorialsLi;
    for(var i = 0; i < 5; i++){
      _editorialsLi = '<li class="nav-listItem nav-listItem-editorials" data-id=' + _editorialsArray[i].id + '>' + _editorialsArray[i].title + '</li>';
      _navListEditorialsItems.push(_editorialsLi);
    }
    _navListEditorialsItems.push('<li class="nav-listItem nav-listItem-editorials nav-listItem-editorials-all">View all... <img src="assets/images/arrowright.png" class="nav-arrow"></li>');
    _navListEditorialsElement.insertAdjacentHTML('beforeend', _navListEditorialsItems.join(''));
  }

  function createWorksList(){
    // var _worksLi;
    // for(var i = 0; i < 5; i++){
    //   _worksLi = '<li class="nav-listItem nav-listItem-works" data-id=' + _worksArray[i].id + '>' + _worksArray[i].title + '</li>';
    //   _navListWorksItems.push(_worksLi);
    // }
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

    _navEditorialsWorks = document.querySelectorAll('.nav-listItem-editorials');
    for(var i = 0; i < _navEditorialsWorks.length; i++){
      _navEditorialsWorks[i].addEventListener('click', displayEditorial);
    }


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

  function galleryLinks(){


    _galleryLinksWorks = document.querySelectorAll('.gallery-item-works');
    for(var i = 0; i < _galleryLinksWorks.length; i++){
      _galleryLinksWorks[i].addEventListener('click', displayCase);
    }

    _galleryLinksSetdesigns = document.querySelectorAll('.gallery-item-setdesign');
    for(var i = 0; i < _galleryLinksSetdesigns.length; i++){
      _galleryLinksSetdesigns[i].addEventListener('click', displayCaseSetdesign);
    }

  }

    // This function builds and displays an editorial case block
    function displayEditorial(){

      _nav.classList.remove('nav--show');
  
      // toggleMobilemenu();
  
      _contentContainer.innerHTML = '';
  
      var _case = document.createElement('div');
      _case.classList.add('case');
      _contentContainer.appendChild(_case);
  
      _caseOutput = '';

      console.log(_editorialsArray);
  
      for(var i = 0; i < _editorialsArray.length; i++){
        if(_editorialsArray[i].id == this.dataset.id){
  
          if(_editorialsArray[i].title && _editorialsArray[i].year){
            _caseOutput += '<p><span class="case-value">' + _editorialsArray[i].title + ' (' + _editorialsArray[i].year + ')</span></p>'
          }
  
          if(_editorialsArray[i].images){
            for(var j = 0; j < _editorialsArray[i].images.length; j++){
              _caseOutput += '<img src="assets/images/' + _editorialsArray[i].images[j] + '" class="case-image">';
            }
          }
          if(_editorialsArray[i].exhibition){
            _caseOutput += '<p><span class="case-value">' + _editorialsArray[i].exhibition + '</span></p>'
          }
          if(_editorialsArray[i].material){
            _caseOutput += '<p><span class="case-value">' + _editorialsArray[i].material + '</span></p>'
          }
        }
      }
      _case.insertAdjacentHTML('beforeend', _caseOutput);
    }


  // This function builds and displays a  work case block
  function displayCase(){

    _nav.classList.remove('nav--show');

    // toggleMobilemenu();

    _contentContainer.innerHTML = '';

    var _case = document.createElement('div');
    _case.classList.add('case');
    _contentContainer.appendChild(_case);

    _caseOutput = '';

    for(var i = 0; i < _worksArray.length; i++){
      if(_worksArray[i].id == this.dataset.id){

        if(_worksArray[i].title && _worksArray[i].year){
          _caseOutput += '<p><span class="case-value">' + _worksArray[i].title + ' (' + _worksArray[i].year + ')</span></p>'
        }

        if(_worksArray[i].images){
          for(var j = 0; j < _worksArray[i].images.length; j++){
            _caseOutput += '<img src="assets/images/' + _worksArray[i].images[j] + '" class="case-image">';
          }
        }
        if(_worksArray[i].exhibition){
          _caseOutput += '<p><span class="case-value">' + _worksArray[i].exhibition + '</span></p>'
        }
        if(_worksArray[i].material){
          _caseOutput += '<p><span class="case-value">' + _worksArray[i].material + '</span></p>'
        }
      }
    }
    _case.insertAdjacentHTML('beforeend', _caseOutput);
  }

  // This function builds and displays a setdesign case block
  function displayCaseSetdesign(){
    // toggleMobilemenu();

    _nav.classList.remove('nav--show');

    _contentContainer.innerHTML = '';

    var _case = document.createElement('div');
    _case.classList.add('case');
    _contentContainer.appendChild(_case);

    _caseOutput = '';

    for(var i = 0; i < _setdesignArray.length; i++){
      if(_setdesignArray[i].id == this.dataset.id){
        
        if(_setdesignArray[i].title){
          _caseOutput += '<p><span class="case-value">' + _setdesignArray[i].title + '</span></p>'
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
            // _caseOutput += '<p><span class="case-key">' + _setdesignArray[i].desc[j][0] + '</span> ' + _setdesignArray[i].desc[j][1] + '</p>'
            _caseOutput += '<p><span class="case-key">' + _setdesignArray[i].desc[j][0] + '</span> <span class="case-value">' + _setdesignArray[i].desc[j][1] + '</span></p>'
          }
        }
        if(_setdesignArray[i].text){
          _caseOutput += '<p><span class="case-value">' + _setdesignArray[i].text + '</span></p>'
        }

      }
    }
    _case.insertAdjacentHTML('beforeend', _caseOutput);
  }



  init();
};

window.onload = Main();