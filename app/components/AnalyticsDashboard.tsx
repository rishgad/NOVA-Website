"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { analytics, type AnalyticsEvent } from "@/lib/analytics"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
} from "recharts"
import { Activity, Users, TrendingUp, Globe } from "lucide-react"

interface AnalyticsStats {
  totalEvents: number
  uniquePages: number
  totalSessions: number
  avgSessionDuration: number
  topPages: Array<{ page: string; views: number }>
  eventTypes: Array<{ name: string; count: number }>
  hourlyActivity: Array<{ hour: number; events: number }>
}

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff7300", "#00ff00", "#ff00ff"]

export default function AnalyticsDashboard() {
  const [events, setEvents] = useState<AnalyticsEvent[]>([])
  const [stats, setStats] = useState<AnalyticsStats | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    loadAnalyticsData()

    // Refresh data every 30 seconds
    const interval = setInterval(loadAnalyticsData, 30000)
    return () => clearInterval(interval)
  }, [])

  const loadAnalyticsData = () => {
    setIsLoading(true)
    const storedEvents = analytics.getStoredAnalytics()
    setEvents(storedEvents)

    if (storedEvents.length > 0) {
      const calculatedStats = calculateStats(storedEvents)
      setStats(calculatedStats)
    }

    setIsLoading(false)
  }

  const calculateStats = (events: AnalyticsEvent[]): AnalyticsStats => {
    const sessions = new Set(events.map((e) => e.properties?.sessionId).filter(Boolean))
    const pages = events.filter((e) => e.name === "page_view")
    const uniquePages = new Set(pages.map((e) => e.properties?.page).filter(Boolean))

    // Calculate top pages
    const pageViews: Record<string, number> = {}
    pages.forEach((event) => {
      const page = event.properties?.page
      if (page) {
        pageViews[page] = (pageViews[page] || 0) + 1
      }
    })

    const topPages = Object.entries(pageViews)
      .map(([page, views]) => ({ page, views }))
      .sort((a, b) => b.views - a.views)
      .slice(0, 5)

    // Calculate event types
    const eventTypeCounts: Record<string, number> = {}
    events.forEach((event) => {
      eventTypeCounts[event.name] = (eventTypeCounts[event.name] || 0) + 1
    })

    const eventTypes = Object.entries(eventTypeCounts)
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count)

    // Calculate hourly activity
    const hourlyActivity = Array.from({ length: 24 }, (_, hour) => ({
      hour,
      events: events.filter((e) => new Date(e.timestamp!).getHours() === hour).length,
    }))

    return {
      totalEvents: events.length,
      uniquePages: uniquePages.size,
      totalSessions: sessions.size,
      avgSessionDuration: 0, // Would need session start/end times to calculate
      topPages,
      eventTypes,
      hourlyActivity,
    }
  }

  const clearData = () => {
    analytics.clearAnalytics()
    setEvents([])
    setStats(null)
  }

  if (isLoading && events.length === 0) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
      </div>
    )
  }

  if (!stats) {
    return (
      <div className="text-center py-12">
        <Activity className="w-16 h-16 mx-auto mb-4 text-gray-400" />
        <h3 className="text-xl font-semibold text-white mb-2">No Analytics Data Yet</h3>
        <p className="text-gray-300 mb-6">Start browsing the site to generate analytics data.</p>
        <Button onClick={loadAnalyticsData} className="bg-white text-black hover:bg-gray-200">
          Refresh Data
        </Button>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2">Analytics Dashboard</h2>
          <p className="text-gray-300">Real-time insights into NOVA website performance</p>
        </div>
        <div className="flex gap-2">
          <Button
            onClick={loadAnalyticsData}
            variant="outline"
            className="text-white border-white hover:bg-white hover:text-black bg-transparent"
          >
            Refresh
          </Button>
          <Button
            onClick={clearData}
            variant="outline"
            className="text-red-400 border-red-400 hover:bg-red-400 hover:text-white bg-transparent"
          >
            Clear Data
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-black bg-opacity-30 backdrop-blur-sm border-white border-opacity-20">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">Total Events</CardTitle>
            <Activity className="h-4 w-4 text-blue-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">{stats.totalEvents.toLocaleString()}</div>
            <p className="text-xs text-gray-400">All tracked interactions</p>
          </CardContent>
        </Card>

        <Card className="bg-black bg-opacity-30 backdrop-blur-sm border-white border-opacity-20">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">Unique Pages</CardTitle>
            <Globe className="h-4 w-4 text-green-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">{stats.uniquePages}</div>
            <p className="text-xs text-gray-400">Pages visited</p>
          </CardContent>
        </Card>

        <Card className="bg-black bg-opacity-30 backdrop-blur-sm border-white border-opacity-20">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">Sessions</CardTitle>
            <Users className="h-4 w-4 text-purple-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">{stats.totalSessions}</div>
            <p className="text-xs text-gray-400">Unique sessions</p>
          </CardContent>
        </Card>

        <Card className="bg-black bg-opacity-30 backdrop-blur-sm border-white border-opacity-20">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">Engagement</CardTitle>
            <TrendingUp className="h-4 w-4 text-orange-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">
              {(stats.totalEvents / Math.max(stats.totalSessions, 1)).toFixed(1)}
            </div>
            <p className="text-xs text-gray-400">Events per session</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Pages */}
        <Card className="bg-black bg-opacity-30 backdrop-blur-sm border-white border-opacity-20">
          <CardHeader>
            <CardTitle className="text-white">Top Pages</CardTitle>
            <CardDescription className="text-gray-300">Most visited pages</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={stats.topPages}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis
                  dataKey="page"
                  stroke="rgba(255,255,255,0.7)"
                  fontSize={12}
                  tickFormatter={(value) => value.split("/").pop() || "Home"}
                />
                <YAxis stroke="rgba(255,255,255,0.7)" fontSize={12} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgba(0,0,0,0.8)",
                    border: "1px solid rgba(255,255,255,0.2)",
                    borderRadius: "8px",
                    color: "white",
                  }}
                />
                <Bar dataKey="views" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Event Types */}
        <Card className="bg-black bg-opacity-30 backdrop-blur-sm border-white border-opacity-20">
          <CardHeader>
            <CardTitle className="text-white">Event Types</CardTitle>
            <CardDescription className="text-gray-300">Distribution of tracked events</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={stats.eventTypes.slice(0, 6)}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="count"
                >
                  {stats.eventTypes.slice(0, 6).map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgba(0,0,0,0.8)",
                    border: "1px solid rgba(255,255,255,0.2)",
                    borderRadius: "8px",
                    color: "white",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Hourly Activity */}
      <Card className="bg-black bg-opacity-30 backdrop-blur-sm border-white border-opacity-20">
        <CardHeader>
          <CardTitle className="text-white">Hourly Activity</CardTitle>
          <CardDescription className="text-gray-300">Events by hour of day</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={stats.hourlyActivity}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
              <XAxis
                dataKey="hour"
                stroke="rgba(255,255,255,0.7)"
                fontSize={12}
                tickFormatter={(value) => `${value}:00`}
              />
              <YAxis stroke="rgba(255,255,255,0.7)" fontSize={12} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(0,0,0,0.8)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  borderRadius: "8px",
                  color: "white",
                }}
                labelFormatter={(value) => `${value}:00`}
              />
              <Line type="monotone" dataKey="events" stroke="#82ca9d" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Recent Events */}
      <Card className="bg-black bg-opacity-30 backdrop-blur-sm border-white border-opacity-20">
        <CardHeader>
          <CardTitle className="text-white">Recent Events</CardTitle>
          <CardDescription className="text-gray-300">Latest tracked interactions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 max-h-64 overflow-y-auto">
            {events
              .slice(-10)
              .reverse()
              .map((event, index) => (
                <div key={index} className="flex items-center justify-between p-2 bg-white bg-opacity-5 rounded">
                  <div className="flex items-center space-x-3">
                    <Badge variant="outline" className="text-xs">
                      {event.name}
                    </Badge>
                    <span className="text-sm text-gray-300">
                      {event.properties?.page || event.properties?.element || "Unknown"}
                    </span>
                  </div>
                  <span className="text-xs text-gray-400">{new Date(event.timestamp!).toLocaleTimeString()}</span>
                </div>
              ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
