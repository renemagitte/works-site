function Main(){

  var _navList;
  var _navLinksShows;
  var _navLinksEditorials;
  var _navLinksEditorialsAll;
  var _navLinksShowsAll;
  var _navLinksWorksAll;
  var _contactButton;

  var _nav;
  var _navArrow;
  var _mobilemenuButton;

  var _contentContainer;
  var _caseOutput;

  var _gallery;
  var _galleryItem;
  var _galleryItems;
  var _galleryLinks;







	function init() {

    _navList = document.querySelector('.nav-list');
    _nav = document.querySelector('.nav');
    _navArrow = document.querySelector('.nav-arrow');
    _mobilemenuButton = document.querySelector('.mobilemenu-button');
    _contentContainer = document.querySelector('.content');
  
    createNav();

    _mobilemenuButton.addEventListener('click', toggleMobilemenu);
    window.addEventListener('scroll', desktopScrollNav);
    // window.addEventListener('resize', resizeNav); 
    
    DrawingCanvas();
  }


  function createNav(){

    var _allNavItems = [];
  
    // Building editoral submenu
    var _editorialsItem;
    _allNavItems.push('<li class="nav-listItem-heading nav-listItem-heading--editorials">Editorial</li>');
    _allNavItems.push('<ul>');
    for(var i = 0; i < 5; i++){
      _editorialsItem = '<li class="nav-listItem nav-listItem-editorials" data-id=' + _editorialsData[i].id + '>' + _editorialsData[i].menuName + '</li>';
      _allNavItems.push(_editorialsItem);
    }
    _allNavItems.push('<li class="nav-listItem nav-listItem-editorials nav-listItem-editorials-all">View all... <img src="assets/images/arrowright.png" class="nav-arrow"></li>');
    _allNavItems.push('</ul>');

    // Building shows submenu
    var _showsItem;
    _allNavItems.push('<li class="nav-listItem-heading nav-listItem-heading--shows">Shows</li>');
    _allNavItems.push('<ul>');
    for(var i = 0; i < 2; i++){
      _showsItem = '<li class="nav-listItem nav-listItem-shows" data-id=' + _showsData[i].id + '>' + _showsData[i].menuName + '</li>';
      _allNavItems.push(_showsItem);
    }
    _allNavItems.push('<li class="nav-listItem nav-listItem-shows nav-listItem-shows-all">View all... <img src="assets/images/arrowright.png" class="nav-arrow"></li>');
    _allNavItems.push('</ul>');

    // Building works submenu
    var _worksItem;
    _allNavItems.push('<li class="nav-listItem-heading nav-listItem-heading--works">works</li>');
    _allNavItems.push('<ul>');
    for(var i = 0; i < 0; i++){
      _worksItem = '<li class="nav-listItem nav-listItem-works" data-id=' + _worksData[i].id + '>' + _worksData[i].menuName + '</li>';
      _allNavItems.push(_worksItem);
    }
    _allNavItems.push('<li class="nav-listItem nav-listItem-works nav-listItem-works-all">View all... <img src="assets/images/arrowright.png" class="nav-arrow"></li>');
    _allNavItems.push('</ul>');

    // Building contact link
    _allNavItems.push('<li class="nav-listItem-heading nav-listItem-contact">Contact</li>');
    
    // Insert nav list to DOM
    _navList.insertAdjacentHTML('beforeend', _allNavItems.join(''));

    // Add links to created elements
     addNavLinks();

  }

  function addNavLinks(){

    // Editorial submenu links
    _navLinksEditorials = document.querySelectorAll('.nav-listItem-editorials');
    for(var i = 0; i < (_navLinksEditorials.length - 1); i++){
      let _editorialsId = _navLinksEditorials[i].dataset.id;

      _navLinksEditorials[i].addEventListener("click", function(){
        displayCase(_editorialsData, _editorialsId);
      });
    }
    _navLinksEditorialsAll = document.querySelector('.nav-listItem-editorials-all');
    _navLinksEditorialsAll.addEventListener("click", function(){
      displayGallery(_editorialsData, 'editorials');
    });

    // Show submenu links
    _navLinksShows = document.querySelectorAll('.nav-listItem-shows');
    for(var i = 0; i < _navLinksShows.length; i++){
      let _showId = _navLinksShows[i].dataset.id;
      
      _navLinksShows[i].addEventListener("click", function(){
        displayCase(_showsData, _showId);
      });
    }
    _navLinksShowsAll = document.querySelector('.nav-listItem-shows-all');
    _navLinksShowsAll.addEventListener("click", function(){
      displayGallery(_showsData, 'shows');
    });

    // Works link
    _navLinksWorksAll = document.querySelector('.nav-listItem-works-all');
    _navLinksWorksAll.addEventListener("click", function(){
      displayGallery(_worksData, 'works');
    });

    // Contact link
    _contactButton = document.querySelector('.nav-listItem-contact');
    _contactButton.addEventListener('click', displayContactPage);

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






  // Building gallery (view all)
  function displayGallery(array, type){

      _nav.classList.remove('nav--show');

      _contentContainer.innerHTML = '';

      _gallery = document.createElement('div');
      _gallery.classList.add('gallery');
      _contentContainer.appendChild(_gallery);

      _galleryItems = [];
      var galleryClass = 'gallery-item-' + type;
      for(var i = 0; i < array.length; i++){
        _galleryItem= '<div class="gallery-item ' + galleryClass + '" data-id="' + array[i].id + '"><img src="assets/images/' + array[i].thumb + '" class="gallery-item-image">' + array[i].title + '</div>';
        _galleryItems.push(_galleryItem);
      }
      _gallery.insertAdjacentHTML('beforeend', _galleryItems.join(''));
  
      addGalleryLinks(array, galleryClass);

  }


  function addGalleryLinks(array, typeClass){

    _galleryLinks = document.querySelectorAll('.' + typeClass);

    for(var i = 0; i < _galleryLinks.length; i++){
      let _arrayId = _galleryLinks[i].dataset.id;
      
      _galleryLinks[i].addEventListener("click", function(){
        displayCase(array, _arrayId);
      });
    }

  }



  




  // Builds and displays a case (editorial, show or work)
  function displayCase(array, id){
    // toggleMobilemenu();

    window.scrollTo(0, 0);

    var _obj = findObjectByKey(array, 'id', id);

    _nav.classList.remove('nav--show');

    _contentContainer.innerHTML = '';
    _caseOutput = '';

    var _case = document.createElement('div');
    _case.classList.add('case');
    _contentContainer.appendChild(_case);


    if(_obj.title){
      _caseOutput += '<p><span class="case-value">' + _obj.title + '</span></p>'
    }
    if(_obj.images){
      for(var j = 0; j < _obj.images.length; j++){
        _caseOutput += '<img src="assets/images/' + _obj.images[j] + '" class="case-image">';
      }
    }
    if(_obj.video){
      _caseOutput += '<iframe width="800" height="533" src="' + _obj.video + '" frameborder="0" allowfullscreen></iframe>'
    }
    if(_obj.desc){
      for(var j = 0; j < _obj.desc.length; j++){
        _caseOutput += '<p><span class="case-key">' + _obj.desc[j][0] + '</span> <span class="case-value">' + _obj.desc[j][1] + '</span></p>'
      }
    }
    if(_obj.text){
      _caseOutput += '<p><span class="case-value">' + _obj.text + '</span></p>'
    }
    _case.insertAdjacentHTML('beforeend', _caseOutput);
  }




  // Builds and displays contact section
  function displayContactPage(){
    toggleMobilemenu();
    _contentContainer.innerHTML = '';
    var _contact = document.createElement('div');
    _contact.classList.add('contact');
    _contentContainer.appendChild(_contact);
    var _contactOutput;
    _contactOutput = '<span class="contact-heading">Contact</span><p>Installation, set design, curation - Paris & Stockholm</p><p>*telefonnummer*</p><p><a href="*m@ailadress*”_blank">*mail@dress.com*</a></p>';
    _contact.insertAdjacentHTML('beforeend', _contactOutput);
  }




  // Find case object (parameters: case-array, 'id', dataset-id)
  findObjectByKey = (array, key, value) => {
    for (var i = 0; i < array.length; i++) {
        if (array[i][key] === value) {
            return array[i];
        }
    }
    return null;
  }



  init();
};

window.onload = Main();