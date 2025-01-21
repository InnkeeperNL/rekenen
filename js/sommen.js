var current_som = '';
var current_antwoord = 0;
var som_goed = false;
var type_sommen = 0;

function get_random_number(min,max){
	if(min == undefined){min = 1;}
	if(max == undefined){max = 100;}
	return Math.ceil(Math.random() * (max - min)) + min;
};

function check_sommen(){
	if(current_som == '')
	{
		var type_som_number = Math.ceil(Math.random() * 6);
		if(type_sommen != 0)
		{
			type_som_number = type_sommen + 0;
		}
		var getal_1 = get_random_number(plusmin_min,plusmin_max);
		var getal_2 = get_random_number(plusmin_min,plusmin_max);
		if(type_som_number == 1) // plus
		{
			current_som = getal_1 + ' + ' + getal_2;
			current_antwoord = getal_1 + getal_2;
		}
		if(type_som_number == 2) // min
		{
			if(getal_2 > getal_1)
			{
				var temp_getal_1 = getal_1 + 0;
				var temp_getal_2 = getal_2 + 0;
				getal_1 = temp_getal_2;
				getal_2 = temp_getal_1;
			}
			current_som = getal_1 + ' - ' + getal_2;
			current_antwoord = getal_1 - getal_2;
		}
		if(type_som_number == 3) // keer
		{
			getal_1 = get_random_number(keerdeel_min,keerdeel_max);
			getal_2 = get_random_number(keerdeel_min,keerdeel_max);
			
			current_som = getal_1 + ' x ' + getal_2;
			current_antwoord = getal_1 * getal_2;
		}
		if(type_som_number == 4) // delen
		{
			getal_1 = get_random_number(keerdeel_min,keerdeel_max);
			getal_2 = get_random_number(keerdeel_min,keerdeel_max);
			var getal_3 = getal_1 * getal_2;
			
			current_som = getal_3 + ' : ' + getal_2;
			current_antwoord = getal_1 + 0;
		}
		if(type_som_number == 5) // ouau
		{
			var random_ouau = get_random_key_from_object(ouau);
			var gekozen_ouau = ouau[random_ouau];
			var formatted_ouau = gekozen_ouau + '';
			formatted_ouau = formatted_ouau.replaceAll('ou', '..');
			formatted_ouau = formatted_ouau.replaceAll('au', '..');

			current_som = formatted_ouau;
			current_antwoord = 'ou';
			if(gekozen_ouau.replaceAll('au', '').length < gekozen_ouau.length)
			{
				current_antwoord = 'au';
			}
			
		}
		if(type_som_number == 6) // eiij
		{
			var random_eiij = get_random_key_from_object(eiij);
			var gekozen_eiij = eiij[random_eiij];
			var formatted_eiij = gekozen_eiij + '';
			formatted_eiij = formatted_eiij.replaceAll('ei', '..');
			formatted_eiij = formatted_eiij.replaceAll('ij', '..');

			current_som = formatted_eiij;
			current_antwoord = 'ei';
			if(gekozen_eiij.replaceAll('ij', '').length < gekozen_eiij.length)
			{
				current_antwoord = 'ij';
			}
			
		}
		$('.som').html(current_som);
		if(type_som_number == 5 && type_sommen == 0){$('.som').append(' (ou/au)');}
		if(type_som_number == 6 && type_sommen == 0){$('.som').append(' (ei/ij)');}
		show_punten();
	}
}

function check_som(){
	if(som_goed == false)
	{
		if($('.antwoord').val() == current_antwoord)
		{
			$('.som').addClass('goed');
			som_goed = true;
			gamedata['punten'] ++;
			show_punten();
			saveToLocalStorage();
		}
		else
		{
			$('.som').addClass('fout');
		}
	}
	else
	{
		new_som();
	}
}

function show_punten(){
	$('.punten').html('punten: ' + gamedata['punten']);
}

function new_som(){
	$('.antwoord').val('');
	current_som = '';
	som_goed = false;
	check_sommen();
	reset_goed_fout();
	show_punten();
}

function reset_goed_fout(){
	$('.som').removeClass('goed');
	$('.som').removeClass('fout');
}