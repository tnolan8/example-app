export default {
  "__schema": {
    "types": [
      {
        "kind": "UNION",
        "name": "CreateUserResult",
        "possibleTypes": [
          {
            "name": "CreateUserResponse"
          },
          {
            "name": "CreateUserError"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "IError",
        "possibleTypes": [
          {
            "name": "CreateUserError"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "ContactFormResult",
        "possibleTypes": [
          {
            "name": "ContactFormResponse"
          },
          {
            "name": "CreateUserError"
          }
        ]
      }
    ]
  }
}
          