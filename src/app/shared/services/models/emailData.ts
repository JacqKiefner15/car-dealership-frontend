
export class EmailData {
  email: string
  first_name: string
  last_name: string
  need: string
  comment: string
  token: string

  constructor({
    email = '',
    first_name = '',
    last_name = '',
    need = '',
    comment= '',
    ... rest
  })
 {
      Object.assign(this, rest)
      this.email = email
      this.first_name = first_name
      this.last_name = last_name
      this.need = need
      this.comment = comment
  }

}
