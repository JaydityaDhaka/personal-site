/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Tata Elxsi',
    position: 'Project Intern',
    url: 'https://www.tataelxsi.com/',
    startDate: '2023-08-09',
    endDate: '2023-11-10',
    summary: `Part of team Ingestwise which consits of roughly 20 highly skilled members, the team focuses primarily on connected vehicle platform. I got to work on the project by utilising various cloud Security concepts like AWS IAM and Amazon Cognito, also created and managed an API Gateway for smooth and secure flow of the numerous APIs being used in the project using Amazon API Gateway. 
    Additionally researched and worked on Eclipse foundation projects linked to the automotive industry particularly Eclipse kuksa which is an open source software still in development with major contributions from tech giants like BMW, Bosch GmbH, etc.`,
    // highlights: [
    //   '', // need to add highlights
    // ],
  },
  {
    name: 'Tata Elxsi',
    position: 'Traniee',
    url: 'https://www.tataelxsi.com/',
    startDate: '2022-05-15',
    endDate: '2024-07-15',
    summary: `Established a networking layer for a client-server architecture made using Java and utilising HTTPs methods, also created a project specific packet structure for sending data to a MySQL database while working on persistence.
    I was also introduced to the concepts of Connected cars, Software defined vehicles and the importance of IOT & Cloud technologies in these conecpts.`,
    // highlights: [
    //   '', // need to add highlights
    // ],
  },
];

export default work;
