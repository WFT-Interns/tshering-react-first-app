export default function LoginInfo({loginInfos}) {
    return (
        <div>
          {loginInfos.map((loginInfo) => (
            <div className="card" key={loginInfo.email}>
              <p>{loginInfo.email}</p>
              <p>{loginInfo.password}</p>
            </div>
          ))}
        </div>
      );
}
