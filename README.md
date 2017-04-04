[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

An example of storing Smooch webhook events to use in Chartio.

<img width="1102" alt="screen shot 2017-04-03 at 9 26 54 pm" src="https://cloud.githubusercontent.com/assets/2235885/24662810/39bd2af4-1924-11e7-8e14-64216ab9c26c.png">

# instructions

## requirements

- A Smooch account ([smooch.io](https://smooch.io/)).
- A Chartio acccount ([chart.io](https://chartio.com/)).
- A Heroku account ([heroku.com](https://heroku.com/))

## steps

1. [Deploy this app to Heroku](https://heroku.com/deploy).
2. [Setup a Smooch webhook](https://docs.smooch.io/guide/receiving-messages/) to point to the **/messages** route on your Heroku app.
3. Add the Heroku app's PostgreSQL database as a [data source on Chartio](https://support.chartio.com/docs/data-sources/#heroku).
4. Configure a dashboard on Chartio and send some messages back and forth on Smooch.
