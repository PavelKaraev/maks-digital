if($(document).width() >= 1024){
    $('.service-list li').click(function(){
        var tab_id = $(this).data('tab');
    
        $('.service-list li').removeClass('active');
        $('.tab-content-item').removeClass('active');
    
        $(this).addClass('active');
        $("#"+tab_id).addClass('active');
    })
}else{
    $('.tab-header-toggle').click(function(e) {    
      var $this = $(this);
        $('.tab-header-toggle').removeClass('active');
      if ($this.next().hasClass('show')) {
          $this.next().removeClass('show');
          $this.next().slideUp(350);
      } else {
          $this.parent().find('.tab-content-item').removeClass('show');
          $this.parent().find('.tab-content-item').slideUp(350);
          $this.next().toggleClass('show');
          $this.next().slideToggle(350);
          $(this).addClass('active');
      }
  });
}

