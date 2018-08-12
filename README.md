# Internet shopping web application

## Required libraries and frameworks:
• React
• Twi.er	bootstrap
• Use other	components	and	libraries	by	preference,	if	it	isn’t	specify
• Applicaton	should	works on the Chrome, Firefox, Safari and IE	current	and
previous versions

Test project	has	3	pages:	search	page,	login	page,	sign	up	page.
It	should	be	single	page	applicaton

## Sign up page:
Should	has	"Sign	up"	bu.on	and	3	fields:	email,	password	and	password
confirm.
When	user	presses	"Sign	up"	bu.on,	app	should	validate	email	field.	As	well	as
password	and	password	confirm	should	be	iden=cal.	Error	message	should	be
shown	on	the	top	of	the	page,	if	valida=on	failed.
If	email	and	password	are	corrected,	auth	info	should	be	stored	in	the	local
storage.	Password	should	be	stored	as	hash.

## Log in page
Has	Email	and	password	fields.
ANer	pressing	"Log	in"	bu.on,	auth	info	checked	and	user	authorized.


## Search page:
Allowed	for	authorized	users	only.
Search	page	should	has	item's	filter	and	item's	list.	When	any	filter	is	changed,
item's	list	reloaded	according	enabled	filters.	Page	shouldn't	be	reloaded,	just
item's	list.	User	can	add	item	in	the	his	cart.
Items	list	should	be	as	sta=c	json	file.

### Item's	fields
• Id
• Name
• Color	(Red,	White,	Black,	Blue,	Yellow,	Green)
• Issue	date	(should	be	in	US	format)
• Price	-	float	(should	be	in	US	format)
• Raitng	 -	float	(should	be	as	5	stars)
• InStock
• Image

## npm comands

- npm start - start project in development mode
- npm run test - start lint and stylelint tests
- npm run build - build project
- node server - run server on prod
