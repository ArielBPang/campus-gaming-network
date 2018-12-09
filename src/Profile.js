import React, { Component } from "react";
import { Link } from "@reach/router";
import axios from "axios";

class Profile extends Component {
  async componentDidMount() {
    // Make api request to get user account baded on url handle
    console.log("handle : %s", this.props.handle);
    await this.getGames();
  }

  getGames = async () => {
    try {
      const response = await axios.get(
        "https://api-endpoint.igdb.com/games/1942?fields=*",
        {
          headers: {
            "user-key": "7abd6fa6d50e330abff5a40825f4c616",
            Accept: "application/json"
          }
        }
      );
      console.log("response : ", response);
    } catch (e) {
      console.log("e : ", e);
    }
  };

  render() {
    return (
      <article className="p-8 max-w-md mx-auto">
        <section className="b-6">
          <div className="flex items-center">
            <img
              src="https://picsum.photos/100/100/?image=1027"
              alt="Profile"
              className="shadow rounded-full"
            />
            <div className="pl-6">
              <h1 className="text-white font-normal">Jane Doe</h1>
              <h4 className="block text-grey-darker font-normal">
                Chicago, IL
              </h4>
            </div>
          </div>
        </section>
        {/* <section className="mt-8">
          <div className="pl-1">
            <ul className="list-reset">
              <li>
                <i className="fab fa-discord" />
              </li>
              <li>
                <i className="fab fa-steam" />
              </li>
              <li>
                <i className="fab fa-xbox" />
              </li>
              <li>
                <i className="fab fa-playstation" />
              </li>
            </ul>
          </div>
        </section> */}
        <section className="mt-8">
          <div className="pl-1">
            <h3 className="text-white font-medium pb-2 uppercase text-xs">
              School
            </h3>
            <p className="text-grey-light font-hairline">
              Illinois Institute of Technology
            </p>
          </div>
        </section>
        <section className="mt-8">
          <div className="pl-1">
            <h3 className="text-white font-medium pb-2 uppercase text-xs">
              Bio
            </h3>
            <p className="text-grey-light font-hairline">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
              ut laudantium, libero ducimus qui rerum quibusdam consectetur quam
              sit nemo neque doloribus itaque asperiores autem laborum at amet
              consequuntur perspiciatis.
            </p>
          </div>
        </section>
        <section className="mt-8">
          <div className="pl-1">
            <h3 className="text-white font-medium pb-2 uppercase text-xs">
              Favorite Games
            </h3>
            <ul className="list-reset flex">
              <li className="flex justify-center items-center p-1 pl-0">
                <img
                  className="p-1 pl-0"
                  src="https://images.igdb.com/igdb/image/upload/t_cover_big/lxoumgqbbj3erxgq6a6l.jpg"
                  alt=""
                />
              </li>
              <li className="flex justify-center items-center p-1">
                <img
                  className="p-1"
                  src="https://images.igdb.com/igdb/image/upload/t_cover_big/hjfe6xe6k5oqprn8vnkz.jpg"
                  alt=""
                />
              </li>
              <li className="flex justify-center items-center p-1">
                <img
                  className="p-1"
                  src="https://images.igdb.com/igdb/image/upload/t_cover_big/yfk9f2lbo0r7slytuhra.jpg"
                  alt=""
                />
              </li>
              <li className="flex justify-center items-center p-1">
                <img
                  className="p-1"
                  src="https://images.igdb.com/igdb/image/upload/t_cover_big/co1hjh.jpg"
                  alt=""
                />
              </li>
              <li className="flex justify-center items-center p-1 pr-0">
                <img
                  className="p-1 pr-0"
                  src="https://images.igdb.com/igdb/image/upload/t_cover_big/obcjdcsaq2ndxqi7zqdf.jpg"
                  alt=""
                />
              </li>
            </ul>
          </div>
        </section>
      </article>
    );
  }
}

export default Profile;
