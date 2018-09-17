$(document).ready(function() {
	let toShow = [];
	let noEl = [];

	$('.top-right a').click(function(e) {

		$(e.target).toggleClass('tag-active');
		let getId = e.target.id;
		let tagName = e.target.innerHTML;

		if (toShow.includes(getId)) {

			for (var i = 0; i < toShow.length; i ++) {
			    if (toShow[i] == getId) { 
			        toShow.splice(i, 1);
			        break;
			    }
			}
		}

		else {
			toShow.push(getId);
		}

		if	(noEl.includes(getId))  {
			for (let j = 0; j < noEl.length; j ++) {
			    if (noEl[j] == getId) { 
			    	$(`.list-body .${getId}`).fadeOut('fast');
			        noEl.splice(j, 1);
			        break;
			    }
			}
		
		}

		else if ( $('.top-right a'+'.'+getId).hasClass('tag-active') && ($('.list-el'+'.'+getId).length === 0) ) {
	   		 	$('.list-body').append(`<p class="tag-no-result ${getId}">No results for: ${tagName}</p>`);
	   		 	noEl.push(getId);
		}

		if (toShow.length === 0) {
				$('#main .list-el').fadeIn('fast');
				$(`.list-body .tag-no-result`).fadeOut('fast');
			}

		else {
				$('#main .list-el').fadeOut('fast');
		}

		$.each(toShow, function(i, b) {
				$('#main .list-el'+'.'+b).fadeIn('fast');
		});	

});

});

