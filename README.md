# Couchsurfing Events
Google [Sheet](tinyurl.com/couchsurfingevents) and [Calendar](tinyurl.com/cseventscal) for Couchsurfing events.

## Details
The sheet shows all Couchsurfing events from around the world, separated by continent. The calendar shows all Couchsurfing events from around the world, and the timezone is UTC. Both will show the same events, and the events showing are ones that happen within the next month and have at least five people attending. Each day, past events will get moved to the “Past” tab in the spreadsheet.

## Code
This code is written in Apps Script for a Google Sheet. As such, there are automatic triggers set up to run daily between 1AM-2AM MST for updating the sheet (including the "Today" tab) and calendar (`getAllEvents()` in [Events.gs](https://github.com/andreaowu/couchsurfingevents/blob/main/Events.gs)), and there is an automatic trigger to run daily for moving past events to the "Past" tab in the sheet (`moveToPast()` in [FuturePast.gs](https://github.com/andreaowu/couchsurfingevents/blob/main/FuturePast.gs)) between 3AM-4AM MST.

To make this run on Apps Script, the files need to be in the following order: [Countries.gs](https://github.com/andreaowu/couchsurfingevents/blob/main/Countries.gs), [Constants.gs](https://github.com/andreaowu/couchsurfingevents/blob/main/Constants.gs), [Events.gs](https://github.com/andreaowu/couchsurfingevents/blob/main/Events.gs) (otherwise Events.gs will complain about not being able to find constants defined in the former two files). [FuturePast.gs](https://github.com/andreaowu/couchsurfingevents/blob/main/FuturePast.gs) doesn't depend on any of these other files, so the order for it with respect to these other files doesn't matter.

## Motivation
There were quite a few Couchsurfers, particularly ambassadors, who were manually searching Couchsurfing for events and keeping their own list of events. With these scripts, they don’t have to duplicate their efforts, all events will be captured, and information can be shared quite easily.
