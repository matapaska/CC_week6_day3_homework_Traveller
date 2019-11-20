const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const journey_starts = this.journeys.map(journey => journey.startLocation )
  return journey_starts;
};

Traveller.prototype.getJourneyEndLocations = function () {
  const journey_ends = this.journeys.map(journey => journey.endLocation)
  return journey_ends;
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  const journeys_by_transport = this.journeys.filter( journey => journey.transport === transport)
  return journeys_by_transport;
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const journeys_over_distance = this.journeys.filter( journey => journey.distance > minDistance)
  return journeys_over_distance;
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  const total_distance = this.journeys.reduce((total, journey) => {
    return total + journey.distance
  }, 0);
  return total_distance;
};

Traveller.prototype.getUniqueModesOfTransport = function () {
const journey_transports = this.journeys.map(journey => journey.transport)
let unique_transports = []
// unique_transports = journey_transports.filter( journey => unique_transports.indexOf(journey) === -1)
// return unique_transports;
// };

for (const transport of journey_transports){
  if (unique_transports.indexOf(transport) === -1){
    unique_transports.push(transport)
    };
  return unique_transports;
  };
};


module.exports = Traveller;
