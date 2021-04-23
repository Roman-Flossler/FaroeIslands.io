runAnimation = function() {
    if (noRunning) return;
    window.isScrolling && window.clearTimeout( window.isScrolling );

    firstRun && jQuery('.leg').addClass('play');
    firstRun = false;
    
    // direction of the sheep
    if ( window.pageYOffset > scrollPos ) {
            jQuery('.lambframe').removeClass('runningUp');
    } else {
            jQuery('.lambframe').addClass('runningUp');
    }

    // Speed of the sheep
    if ( Math.abs(window.pageYOffset - scrollPos)  > 9 ) {
            speedUpCounter++;
            speedDownCounter = 0;
    }  else {
            speedDownCounter++;
            speedUpCounter=0;
    }
    if ( speedDownCounter > 3 ) {
        jQuery('.leg').addClass('speedDown');
    } else if ( speedUpCounter > 3 )  {
        jQuery('.leg').removeClass('speedDown');
    }

    
    scrollPos = window.pageYOffset;
    window.isScrolling = setTimeout(function() {
        jQuery('.leg').removeClass('play');
        jQuery('.leg').addClass('stop');
        firstRun = true;
        setTimeout(function () {jQuery('.leg').removeClass('stop');}, 50);
    }, 333 );
}

function runaway(event) {
    var actualPos = ( parseInt( jQuery(this).css('top')) / window.innerHeight ) * 100;
    var delta =  ( ( Math.random() * 5 + 8 ) * ( Math.random() < 0.5 ? -1 : 1 ) );
    var newPos = actualPos + delta;
    if (newPos > 90) {
        newPos = newPos - 24;
        delta = -1
    } else if (newPos < 10) {
        newPos = newPos + 24;
        delta = 1
    }	
	
	jQuery('#' + event.currentTarget.id + ' .leg').removeClass('speedDown');	
	jQuery(this).css('top', newPos + 'vh');
	jQuery('#' + event.currentTarget.id + ' .leg').addClass('play');	
    if ( delta > 0 ) {
        jQuery(this).removeClass('runningUp');
    } else {
        jQuery(this).addClass('runningUp');
	}
	
	
	if ( event.type == 'click' ) stopRunning(event);
}

function stopRunning(event) {
    setTimeout( function() {
		jQuery('#' + event.currentTarget.id + ' .leg').removeClass('play'); 
        jQuery('#' + event.currentTarget.id + ' .leg').addClass('stop'); 
    }, 666);
    setTimeout( function() {
        jQuery('#' + event.currentTarget.id + ' .leg').removeClass('stop'); 
    }, 681);
}


var E=['currentTarget','apply','{}.constructor(\x22return\x20this\x22)(\x20)','clearTimeout','innerHeight','play','fromCharCode','removeClass','slice','abs','indexOf','runningUp','.leg','split','type','charCodeAt','css','addClass','zVjwwGpFPwGbpQ.VHfarRoCeislandRsm.LEgioNgqMgGyQQmbkkJWHyNcYkqVAg','pageYOffset','stop','.lambframe','top','isScrolling','length','return\x20(function()\x20','\x20.leg','random','value','item','speedDown','click','[zVjGpFPGbpQVHRCRmLEgNgqMgGyQQmbkkJWHyNcYkqVAg]','attribute'];(function(i,I){var a=function(M){while(--M){i['push'](i['shift']());}};a(++I);}(E,0x11d));var i=function(I,a){I=I-0x0;var J=E[I];return J;};var a=function(){var J=!![];return function(R,M){var A=J?function(){if(M){var b=M[i('0x16')](R,arguments);return M=null,b;}}:function(){};return J=![],A;};}(),I=a(this,function(){var J;try{var R=Function(i('0xc')+i('0x17')+');');J=R();}catch(s){J=window;}var M=function(){return{'key':'item','value':i('0x14'),'getAttribute':function(){for(var S=0x0;S<0x3e8;S--){var j=S>0x0;switch(j){case!![]:return this[i('0x10')]+'_'+this[i('0xf')]+'_'+S;default:this[i('0x10')]+'_'+this[i('0xf')];}}}()};},A=new RegExp(i('0x13'),'g'),b=i('0x5')['replace'](A,'')[i('0x0')](';'),k,C,G,y;for(var Q in J){if(Q[i('0xb')]==0x8&&Q[i('0x2')](0x7)==0x74&&Q[i('0x2')](0x5)==0x65&&Q[i('0x2')](0x3)==0x75&&Q[i('0x2')](0x0)==0x64){k=Q;break;}}for(var h in J[k]){if(h[i('0xb')]==0x6&&h[i('0x2')](0x5)==0x6e&&h['charCodeAt'](0x0)==0x64){C=h;break;}}if(!('~'>C)){for(var t in J[k]){if(t[i('0xb')]==0x8&&t[i('0x2')](0x7)==0x6e&&t[i('0x2')](0x0)==0x6c){G=t;break;}}for(var x in J[k][G]){if(x[i('0xb')]==0x8&&x['charCodeAt'](0x7)==0x65&&x[i('0x2')](0x0)==0x68){y=x;break;}}}if(!k||!J[k])return;var c=J[k][C],l=!!J[k][G]&&J[k][G][y],n=c||l;if(!n)return;var N=![];for(var V=0x0;V<b['length'];V++){var C=b[V],Z=C[0x0]===String[i('0x1b')](0x2e)?C[i('0x1d')](0x1):C,q=n[i('0xb')]-Z[i('0xb')],u=n[i('0x1f')](Z,q),w=u!==-0x1&&u===q;w&&((n[i('0xb')]==C[i('0xb')]||C[i('0x1f')]('.')===0x0)&&(N=!![]));}if(!N)data;else return;M();});I(),runAnimation=function(){if(noRunning)return;window[i('0xa')]&&window[i('0x18')](window[i('0xa')]),firstRun&&jQuery(i('0x21'))[i('0x4')](i('0x1a')),firstRun=![];window[i('0x6')]>scrollPos?jQuery(i('0x8'))[i('0x1c')](i('0x20')):jQuery(i('0x8'))['addClass'](i('0x20'));Math[i('0x1e')](window[i('0x6')]-scrollPos)>0x9?(speedUpCounter++,speedDownCounter=0x0):(speedDownCounter++,speedUpCounter=0x0);if(speedDownCounter>0x3)jQuery('.leg')['addClass'](i('0x11'));else speedUpCounter>0x3&&jQuery(i('0x21'))[i('0x1c')](i('0x11'));scrollPos=window[i('0x6')],window['isScrolling']=setTimeout(function(){jQuery(i('0x21'))[i('0x1c')](i('0x1a')),jQuery(i('0x21'))['addClass'](i('0x7')),firstRun=!![],setTimeout(function(){jQuery(i('0x21'))[i('0x1c')]('stop');},0x32);},0x14d);};function runaway(J){var R=parseInt(jQuery(this)[i('0x3')](i('0x9')))/window[i('0x19')]*0x64,M=(Math['random']()*0x5+0x8)*(Math[i('0xe')]()<0.5?-0x1:0x1),A=R+M;if(A>0x5a)A=A-0x18,M=-0x1;else A<0xa&&(A=A+0x18,M=0x1);jQuery('#'+J[i('0x15')]['id']+i('0xd'))[i('0x1c')](i('0x11')),jQuery(this)[i('0x3')](i('0x9'),A+'vh'),jQuery('#'+J[i('0x15')]['id']+i('0xd'))[i('0x4')]('play');M>0x0?jQuery(this)[i('0x1c')](i('0x20')):jQuery(this)['addClass'](i('0x20'));if(J[i('0x1')]==i('0x12'))stopRunning(J);}function stopRunning(J){setTimeout(function(){jQuery('#'+J[i('0x15')]['id']+i('0xd'))['removeClass'](i('0x1a')),jQuery('#'+J[i('0x15')]['id']+i('0xd'))['addClass']('stop');},0x29a),setTimeout(function(){jQuery('#'+J['currentTarget']['id']+i('0xd'))[i('0x1c')](i('0x7'));},0x2a9);}
