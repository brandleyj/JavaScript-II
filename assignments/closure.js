// ==== Challenge 1: Write your own closure ====
// Write a closure of your own creation.
// Keep it simple! Remember a closure is just a function
// that manipulates variables defined in the outer scope.
// The outer scope can be a parent function, or the top level of the script.
function MLB(MajorLeagueBaseball) {
	const league1 = "National League";
	const league2 = "American League";

	function NLdivisions(nationalLeague) {
		const div1 = "NL Central";
		const div2 = "NL West";
		const div3 = "NL East";

		function NLcentral(NLcentralTeams) {
			const team1 = "Chicago Cubs";
			const team2 = "Cincinnati Reds";
			const team3 = "Milwaukee Brewers";
			const team4 = "Pittsburg Pirates";
			const team5 = "St. Louis Cardinals";
		}

		function NLwest(NLwestTeams) {
			const team6 = "Arizona Diamondbacks";
			const team7 = "Colorado Rockies";
			const team8 = "Los Angeles Dodgers";
			const team9 = "San Diego Padres";
			const team10 = "San Francisco Giants";
		}

		function NLeast(NLeastTeams) {
			const team11 = "Atlanta Braves";
			const team12 = "Miami Marlins";
			const team13 = "New York Mets";
			const team14 = "Philadelphia Phillies";
			const team15 = "Washington Nationals";
		}
	}

	function ALdivisions(americanLeague) {
		const div4 = "AL Central";
		const div5 = "AL West";
		const div6 = "AL East";

		function ALcentral(ALcentralTeams) {
			const team16 = "Chicago White Sox";
			const team17 = "Cleveland Indians";
			const team18 = "Detroit Tigers";
			const team19 = "Kansas City Royals";
			const team20 = "Minnesota Twins";
		}

		function ALwest(ALwestTeams) {
			const team21 = "Houston Astros";
			const team22 = "Los Angeles Angels";
			const team23 = "Oakland Athletics";
			const team24 = "Seattle Mariners";
			const team25 = "Texas Rangers";
		}

		function ALeast(ALeastTeams) {
			const team26 = "Baltimore Orioles";
			const team27 = "Boston Red Sox";
			const team28 = "New York Yankees";
			const team29 = "Tampa Bay Rays";
			const team30 = "Toronto Blue Jays";
		}
	}
}

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 2: Implement a "counter maker" function ====
const counterMaker = () => {
	// IMPLEMENTATION OF counterMaker:
	// 1- Declare a `count` variable with a value of 0. We will be mutating it, so declare it using `let`!
	// 2- Declare a function `counter`. It should increment and return `count`.
	//      NOTE: This `counter` function, being nested inside `counterMaker`,
	//      "closes over" the `count` variable. It can "see" it in the parent scope!
	// 3- Return the `counter` function.
};
// Example usage: const myCounter = counterMaker();
// myCounter(); // 1
// myCounter(); // 2

// ==== Challenge 3: Make `counterMaker` more sophisticated ====
// It should have a `limit` parameter. Any counters we make with `counterMaker`
// will refuse to go over the limit, and start back at 1.

// ==== Challenge 4: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
	// Return an object that has two methods called `increment` and `decrement`.
	// `increment` should increment a counter variable in closure scope and return it.
	// `decrement` should decrement the counter variable and return it.
};
