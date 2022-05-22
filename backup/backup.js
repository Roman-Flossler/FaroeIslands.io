		document.addEventListener('scroll', function(e ) {
			teaserHeight = jQuery('#teaser').height();
			docHeight = jQuery(document).height();
			var progres = ( window.pageYOffset + window.innerHeight ) - ( docHeight - teaserHeight );			
			if( progres > -533 ) {
				bluring = true;
				blurefect();
			} else {
				bluring = false;
				bluringRunning = false;
			}
			console.log(bluring)
		});

		function blurefect() {
			if (!bluring || currentPos == window.pageYOffset) return;
			currentPos = window.pageYOffset;
			bluringRunning = true;
			console.log('efx');
			var progres = ( window.pageYOffset + window.innerHeight ) - ( docHeight - teaserHeight );
			jQuery('#teaser').css( 'webkitFilter', 'blur(' + ( 33 - (progres /  teaserHeight * 33 )) + 'px)');

			if( progres < teaserHeight * 0.7 ) {
				jQuery("#uteaser").css('visibility', 'hidden');
			} else {
				jQuery("#uteaser").css('visibility', 'visible');
			}

			window.setTimeout(blurefect, 122);
			if (teasered) return;
			if( progres > jQuery('#teaser').height() - 6 ) {
				SSG.run( { initImgID: 43 } );
				teasered = true;
			}

		}
