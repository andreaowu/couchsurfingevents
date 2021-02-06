# Couchsurfing Events
Google [Sheet](tinyurl.com/couchsurfingevents) and [Calendar](tinyurl.com/cseventscal) for Couchsurfing events.

## Details
The sheet shows all Couchsurfing events from around the world, separated by continent. The calendar shows all Couchsurfing events from around the world, and the timezone is UTC. Both will show the same events, and the events showing are ones that happen within the next month and have at least five people attending. Each day, past events will get moved to the “Past” tab in the spreadsheet.

## Code
This code is written in Apps Script for a Google Sheet. As such, there are automatic triggers set up to run Sunday and Wednesday to update the sheet and calendar (Events.gs), and there is an automatic trigger to run every day to move past events to the "Past" tab in the sheet (FuturePast.gs).

## Motivation
There were quite a few Couchsurfers, particularly ambassadors, who were manually searching Couchsurfing for events and keeping their own list of events. With these scripts, they don’t have to duplicate their efforts, all events will be captured, and information can be shared quite easily.
