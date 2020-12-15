/*
	Copyright (c) DeltaNedas 2020

	This program is free software: you can redistribute it and/or modify
	it under the terms of the GNU General Public License as published by
	the Free Software Foundation, either version 3 of the License, or
	(at your option) any later version.

	This program is distributed in the hope that it will be useful,
	but WITHOUT ANY WARRANTY; without even the implied warranty of
	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
	GNU General Public License for more details.

	You should have received a copy of the GNU General Public License
	along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/
const items = {
	bronze: "#c26726",
	tin: "#faf889",
	solder: {
		color: "#dad6d4",
		mask: "icemod-ingot-dull"
	},
	testround: {
		color: "#ff0000",
		mask: "icemod-bullet"
	},
	tinround: {
		color: "#fdfd9b",
		mask: "icemod-bullet-thin"
	},
	copperround: {
		color: "#e68a00",
		mask: "icemod-bullet"
	},
	magic: {
		color: "#cc0066",
		mask: "icemod-flask-half"
	},
	poison: {
		color: "#009900",
		mask: "icemod-flask-full"
	},
	coppergear: {
		color: "#e68a00",
		mask: "icemod-gear"
	}
};

this.global.icemod.add(items);
