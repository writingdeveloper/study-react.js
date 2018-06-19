class ContactInfo extends React.Component {
  render() {
    return ( <div> {
        this.props.contact.name
      } {
        this.props.contact.phone
      } </div>
    )
  }
}

class Contact extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        contactData: [{
            name: 'Abet',
            phone: '010-3736-9321'
          },
          {
            name: 'Woot',
            phone: '010-3736-9322'
          },
          {
            name: 'TAek',
            phone: '010-3736-9323'
          },
          {
            name: 'Ablert',
            phone: '010-3736-9324'
          }
        ]
      }
    }
    render() {

      const mapToComponent = (data) => {
        return data.map((contact, i) => {
            return ( < ContactInfo contact = {
                contact
              }
              key = {
                i
              }
              />);
            });
        };

        return ( <
          div > {
            mapToComponent(this.state.contactData)
          } <
          /div>
        )
      }
    }

    class App extends React.Component {
      render() {
        return ( <
          Contact / >
        );
      }
    };

    ReactDOM.render( <
      App > < /App>,
      document.getElementById("root")
    );
