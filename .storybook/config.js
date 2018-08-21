/* usually inside .storybook
import the client
import ApolloProvider
add a global decorator wrapping all stories with Apollo
*/

addDecorator(
    story => (
        <ApolloProvider client={client}>
            <div style={{ marginLeft: 20, marginRight: 20 }}>
                {story()}
            </div>
        </ApolloProvider>
    )
)
